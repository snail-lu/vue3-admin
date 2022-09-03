export interface StateDto {
    isCollapse: boolean; // 菜单栏是否折叠
    userInfo: object; // 用户信息
    roleRoutes: object[]; // 用户可访问路由
    addRoleRoutes: boolean; // 是否需要动态添加路由
}
