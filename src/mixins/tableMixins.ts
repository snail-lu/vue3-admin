export default {
    data() {
        return {
            tableData: [],
            tableLoading: false,
            total: 0
        };
    },
    methods: {
        // 页码修改
        handlePageChange(currentPage) {
            this.searchForm.pageInfo.pageNo = currentPage;
            this.getTableData();
        },
        // 每页数量修改
        handleSizeChange(currentPage) {
            this.searchForm.pageInfo.pageSize = currentPage;
            this.getTableData();
        },
        // 查询
        onSearch() {
            this.searchForm.pageInfo.pageNo = 1;
            this.getTableData();
        },
        // 请求列表数据
        async getTableData() {
            const { searchForm: data, searchUrl: url } = this;
            this.tableLoading = true;

            try {
                let res = await this.request({ url, data, method: 'POST' });
                if (res && res.result) {
                    console.log(res.result);
                    this.tableData = res.result.list;
                    this.total = res.result.total;
                    this.tableLoading = false;
                }
            } catch (e) {
                this.tableLoading = false;
            }
        }
    }
};
