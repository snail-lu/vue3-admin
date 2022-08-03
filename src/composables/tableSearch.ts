import { ref } from 'vue';
import request from '@/request/index';
import { responseDto } from '@/types/request';

export default function tableSearch({ searchForm, searchUrl }) {
    const tableData = ref([]);
    const total = ref(0);

    // 请求列表数据
    const getTableData = async () => {
        try {
            let res: responseDto = await request({ url: searchUrl, data: searchForm.value, method: 'POST' });
            if (res && res.result) {
                tableData.value = res.result.list;
                total.value = res.result.total;
            }
        } catch (e) {}
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
        tableData,
        total,
        onSearch,
        handlePageChange,
        handleSizeChange
    };
}
