import { ref } from 'vue';
import request from '@/request/index';
import { responseDto } from '@/types/request';

export default function tableSearch({ searchForm, searchUrl }) {
    const tableData = ref([]);
    const tableLoading = ref(false);
    const total = ref(0);

    // 请求列表数据
    const getTableData = async () => {
        tableLoading.value = true;

        try {
            let res: responseDto = await request({ url: searchUrl, data: searchForm.value, method: 'POST' });
            if (res && res.result) {
                console.log(res.result);
                tableData.value = res.result.list;
                total.value = res.result.total;
                tableLoading.value = false;
            }
        } catch (e) {
            tableLoading.value = false;
        }
    };

    // 页码修改
    const handlePageChange = (currentPage) => {
        searchForm.value.pageInfo.pageNo = currentPage;
        getTableData();
    };

    // 每页数量修改
    const handleSizeChange = (currentPage) => {
        searchForm.value.pageInfo.pageSize = currentPage;
        getTableData();
    };
    // 查询
    const onSearch = () => {
        searchForm.value.pageInfo.pageNo = 1;
        getTableData();
    };

    return {
        tableData,
        tableLoading,
        total,
        onSearch,
        handlePageChange,
        handleSizeChange
    };
}
