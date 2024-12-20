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
                  label="Add client"
                  severity="primary"
                  size="small"
                  class="ml-auto add-new-client"
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
                      <div>{{ slotProps.data.fullname }}</div>
                      <span class="text-muted">{{ slotProps.data.email }}</span>
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
                          @click="onEditClient(slotProps.data.id)"
                        />
                        <MainButton
                          size="small"
                          label="Delete"
                          outlined
                          @click="showConfirmDialog(slotProps.data.id)"
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
  </div>
</template>
<script setup>
import { mockApi } from '@/api/clientsApi'
import MainButton from '@/components/buttons/MainButton.vue'
import ConfirmDialog from '@/components/common/ConfirmDialog.vue'
import DocumentTag from '@/components/common/DocumentTag.vue'
import PageHeader from '@/components/common/PageHeader.vue'
import SearchInput from '@/components/common/SearchInput.vue'
import CustomPagination from '@/components/unitsPage/CustomPagination.vue'
import Card from 'primevue/card'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Message from 'primevue/message'
import { onMounted, ref } from 'vue'
/** Filters **/
const filter = ref('')

/** Dialog **/
const showConfirm = ref(false)
const selectedClient = ref(null)

const selectedClients = ref()
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

const onEditClient = id => {
  console.log('onEditClient', id)
}

const showConfirmDialog = id => {
  selectedClient.value = id
  showConfirm.value = true
}

const closeConfirmDialog = () => {
  selectedClient.value = null
  showConfirm.value = false
}

const applyConfirmDialog = () => {
  onDeleteClient(selectedClient.value)
  closeConfirmDialog()
}

const onDeleteClient = id => {
  mockApi.deleteClient(id)
  fetchClients()
}

const fetchClients = async () => {
  loading.value = true

  try {
    const response = await mockApi.getClients(
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
