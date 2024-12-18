<template>
  <div class="page page-clients">
    <PageHeader :title="pageTitle"></PageHeader>
    <div class="page-content">
      <div class="clients-table">
        <Card>
          <template #content>
            <DataTable
              scrollable
              v-model:selection="selectedClients"
              :value="clients"
              :loading="loading"
              tableStyle="min-width: 50rem"
              paginator
              :rows="5"
              :rowsPerPageOptions="[5, 10, 20, 50]"
              paginatorTemplate="RowsPerPageDropdown PrevPageLink PageLinks NextPageLink"
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
              <Column header="Documents"></Column>
              <Column field="points" sortable header="Points"></Column>
              <Column header="Actions">
                <template #body="slotProps">
                  <div class="flex gap-2">
                    <MainButton
                      size="small"
                      label="Edit"
                      variant="outlined"
                      @click="onEditClient(slotProps.data.id)"
                    />
                    <MainButton
                      size="small"
                      label="Delete"
                      variant="outlined"
                      @click="onDeleteClient(slotProps.data.id)"
                    />
                  </div>
                </template>
              </Column>
            </DataTable>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>
<script setup>
import { mockApi } from '@/api/clientsApi'
import MainButton from '@/components/buttons/MainButton.vue'
import PageHeader from '@/components/common/PageHeader.vue'
import Card from 'primevue/card'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import { onMounted, ref } from 'vue'

const pageTitle = ref('Clients')
const selectedClients = ref()
const clients = ref()
const limit = ref(8)
const total = ref(0)
const currentPage = ref(0) // zero index
const loading = ref(true)

const onEditClient = id => {
  console.log('onEditClient', id)
}

const onDeleteClient = id => {
  console.log('onDeleteClient', id)
}

const fetchClients = async () => {
  loading.value = true

  try {
    const response = await mockApi.getClients({}, null, currentPage.value, limit.value)

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
