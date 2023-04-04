import { ref } from 'vue';
import request from '@/utils/request';

export default function tableSearch({ searchForm, searchUrl }) {
    const tableData = ref([]);
    const total = ref(0);

    // 请求列表数据
    const loading = ref(false);
    const getTableData = async () => {
        try {
            loading.value = true;
            let res = await request({ url: searchUrl, data: searchForm, method: 'POST' });
            if (res && res.result) {
                tableData.value = res.result.list;
                total.value = res.result.total;
            }
            loading.value = false;
        } catch (e) {
            loading.value = false;
        }
    };

    // 页码修改
    const handlePageChange = (currentPage) => {
        searchForm.pageInfo.pageNo = currentPage;
        getTableData();
    };

    // 每页数量修改
    const handleSizeChange = (currentPage) => {
        searchForm.pageInfo.pageSize = currentPage;
        getTableData();
    };
    // 查询
    const onSearch = () => {
        searchForm.pageInfo.pageNo = 1;
        getTableData();
    };

    return {
        loading,
        tableData,
        total,
        onSearch,
        handlePageChange,
        handleSizeChange
    };
}
