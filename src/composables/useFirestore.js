import { ref } from 'vue';
import { addDocument, updateDocument, deleteDocument, getDocuments, getDocumentById, getDocumentsByField } from '@/api/firestore';

export function useFirestore(collectionName) {
  const item = ref(null);
  const items = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const fetchItems = async () => {
    loading.value = true;
    try {
      items.value = await getDocuments(collectionName);
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  const addItem = async (data) => {
    try {
      return await addDocument(collectionName, data);
    } catch (err) {
      error.value = err;
    }
  };

  const updateItem = async (docId, data) => {
    try {
      await updateDocument(collectionName, docId, data);
      await fetchItems();
    } catch (err) {
      error.value = err;
    }
  };

  const deleteItem = async (docId) => {
    try {
      await deleteDocument(collectionName, docId);
      await fetchItems();
    } catch (err) {
      error.value = err;
    }
  };

  const fetchItemById = async (id) => {
    loading.value = true;
    try {
      item.value = await getDocumentById(collectionName, id)
    } catch (err) {
      error.value = err;
      console.error('Ошибка при загрузке проекта:', err);
    } finally {
      loading.value = false;
    }
  };
  const fetchItemsByField = async (field, value) => {
    loading.value = true;
    try {
      items.value = await getDocumentsByField(collectionName, field, value)
    } catch (err) {
      error.value = err;
      console.error('Ошибка при загрузке проекта:', err);
    } finally {
      loading.value = false;
    }
  };

  return {
    item,
    items,
    loading,
    error,
    fetchItems,
    addItem,
    updateItem,
    deleteItem,
    fetchItemById,
    fetchItemsByField
  };
}
