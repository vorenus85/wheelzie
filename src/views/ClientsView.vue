<template>
  <div class="page page-clients">
    <PageHeader title="Clients"></PageHeader>
    <div class="page-content">
      <div class="clients-table">
        <Card>
          <template #content>
            <div class="module module-with-scroller module-with-scroller-lg p-1">
              <!-- Top Controls -->
              <div class="page-content-top mb-3 pb-1 flex gap-2 flex-wrap">
                <SearchInput
                  variant="dark"
                  placeholder="Search for client"
                  @searchInput="onSearchInput"
                  :filter="filter"
                />
                <MainButton
                  severity="secondary"
                  label="Delete selected"
                  size="small"
                  class="ml-auto delete-selected-clients"
                  @click="showConfirmDialog"
                  v-if="selectedClients.length"
                ></MainButton>
                <MainButton
                  label="Add client"
                  severity="primary"
                  size="small"
                  @click="showClientDialogModal()"
                  :class="selectedClients.length ? 'ml-0' : 'ml-auto'"
                  class="add-new-client"
                />
              </div>
              <template v-if="filter.length && !clients.length">
                <Message severity="secondary" class="w-full mt-5 mb-5"
                  >No clients were found matching your criteria.</Message
                >
              </template>
              <template v-else>
                <DataTable
                  class="outlined"
                  scrollable
                  v-model:selection="selectedClients"
                  :value="clients"
                  :loading="loading"
                  tableStyle="min-width: 50rem"
                >
                  <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
                  <Column field="fullname" sortable header="Client">
                    <template #body="slotProps">
                      <div class="flex">
                        <MonogramBadge :name="slotProps.data.fullname" />
                        <div class="flex flex-col">
                          <div>{{ slotProps.data.fullname }}</div>
                          <span class="text-muted">{{ slotProps.data.email }}</span>
                        </div>
                      </div>
                    </template>
                  </Column>
                  <Column field="phone" sortable header="Phone"></Column>
                  <Column field="addressLine1" sortable header="Address"></Column>
                  <Column header="Documents">
                    <template #body="slotProps">
                      <DocumentTag
                        class="my-1"
                        v-if="slotProps.data?.residenceCard"
                        card-type="residenceCard"
                        :firstName="slotProps.data.firstName"
                      />
                      <DocumentTag
                        class="my-1"
                        v-if="slotProps.data?.driveLicense"
                        card-type="driveLicense"
                        :firstName="slotProps.data.firstName"
                      />
                    </template>
                  </Column>
                  <Column field="points" sortable header="Points"></Column>
                  <Column header="Actions">
                    <template #body="slotProps">
                      <div class="flex gap-2">
                        <MainButton
                          size="small"
                          label="Edit"
                          outlined
                          @click="showClientDialogModal(slotProps.data)"
                        />
                        <MainButton
                          size="small"
                          label="Delete"
                          outlined
                          @click="showConfirmDialog(slotProps.data)"
                        />
                      </div>
                    </template>
                  </Column>
                </DataTable>
              </template>
              <!-- Pagination -->
              <div class="page-content-bottom">
                <CustomPagination :limit="limit" :total="total" @pageChange="onPageChange" />
              </div>
            </div>
          </template>
        </Card>
      </div>
    </div>
    <!-- Confirmation Dialog -->
    <ConfirmDialog
      :showDialog="showConfirm"
      @applyConfirmation="applyConfirmDialog"
      @hide="closeConfirmDialog"
    />
    <ClientDialog
      :client="selectedClient"
      :showDialog="showClientDialog"
      @save="saveClientDialog"
      @hide="closeClientDialog"
    />
  </div>
</template>
<script setup>
import MainButton from '@/components/buttons/MainButton.vue'
import ConfirmDialog from '@/components/common/ConfirmDialog.vue'
import DocumentTag from '@/components/common/DocumentTag.vue'
import MonogramBadge from '@/components/common/MonogramBadge.vue'
import PageHeader from '@/components/common/PageHeader.vue'
import SearchInput from '@/components/common/SearchInput.vue'
import ClientDialog from '@/components/dialogs/ClientDialog.vue'
import CustomPagination from '@/components/unitsPage/CustomPagination.vue'
import { clientsApi } from '@/service/clients'
import Card from 'primevue/card'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Message from 'primevue/message'
import { onMounted, ref } from 'vue'
/** Filters **/
const filter = ref('')

/** Dialog **/
const showClientDialog = ref(false)
const showConfirm = ref(false)
const selectedClient = ref(null)

const selectedClients = ref([])
const clients = ref([])
const limit = ref(8)
const total = ref(0)
const currentPage = ref(0) // zero index
const loading = ref(true)

const onPageChange = ({ page, rows }) => {
  currentPage.value = page
  limit.value = rows
  fetchClients()
}

/** Events **/
const onSearchInput = value => {
  filter.value = value
  fetchClients()
}

const showConfirmDialog = client => {
  selectedClient.value = client
  showConfirm.value = true
}

const closeConfirmDialog = () => {
  selectedClient.value = null
  showConfirm.value = false
}

const applyConfirmDialog = () => {
  if (selectedClients?.value.length) {
    deleteSelectedClients()
  } else {
    onDeleteClient(selectedClient.value)
  }
  closeConfirmDialog()
}

const showClientDialogModal = client => {
  selectedClient.value = client
  showClientDialog.value = true
}

const closeClientDialog = () => {
  showClientDialog.value = false
}

const saveClientDialog = client => {
  clientsApi.upsertClient(client)
  closeClientDialog()
  fetchClients()
}

const deleteSelectedClients = () => {
  const ids = selectedClients.value.map(client => client.id)
  clientsApi.deleteClients(ids)
  selectedClients.value = []
  fetchClients()
}

const onDeleteClient = client => {
  const { id } = client
  clientsApi.deleteClient(id)
  fetchClients()
}

const fetchClients = async () => {
  loading.value = true

  try {
    const response = await clientsApi.getClients(
      {
        expression: filter?.value
      },
      null,
      currentPage.value,
      limit.value
    )

    if (!response.ok) {
      throw new Error('Failed to load data')
    }

    clients.value = response.data
    total.value = response.total
  } catch (error) {
    error.value = error.message
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchClients()
})
</script>
