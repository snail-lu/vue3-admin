<template>
    <div class="header-container">
        <!-- 系统标题 -->
        <div class="box-l">
            <img class="logo" src="../../assets/logo.png" />
            <span class="title">商城管理系统</span>
        </div>

        <!-- 用户信息 -->
        <div class="box-r">
            <el-icon class="fullscreen-icon" :size="24" color="#ffffff" @click="handleFullScreen" title="全屏">
                <full-screen />
            </el-icon>
            <el-dropdown @command="handleCommand" trigger="click">
                <div class="flex-box flex-v-center">
                    Hi,
                    <span class="user-name flex-box flex-v-center">
                        {{ userInfo?.username || ''
                        }}<el-icon>
                            <arrow-down />
                        </el-icon>
                    </span>
                </div>

                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item command="github">项目仓库</el-dropdown-item>
                        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const userInfo = computed(() => store.state.userInfo);

const clearUserInfo = () => {
    store.commit('setRoleRoutes', { roleRoutes: [] });
    store.commit('setUserInfo', { userInfo: null });
};

const isFullScreen = ref(false);

// 全屏事件
function handleFullScreen() {
    let element = document.documentElement;
    if (isFullScreen.value) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    } else {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        }
    }
    isFullScreen.value = !isFullScreen.value;
}

const router = useRouter();

const handleCommand = (command: string) => {
    switch (command) {
        case 'logout':
            logout();
            break;
        case 'github':
            goToGithub();
            break;
        default:
            break;
    }
};
// 登出
function logout() {
    ElMessageBox.confirm('确定退出登录吗', '登出', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    }).then(
        () => {
            // 清空缓存数据，并重定向到登录页
            clearUserInfo();
            router.replace('/login');
        },
        () => {}
    );
}

// 跳转github
function goToGithub() {
    window.open('https://github.com/Snail-Lu/vue3-ts-admin');
}
</script>

<style lang="scss" scoped>
.header-container {
    height: 60px;
    // background-color: #242f42;
    background-color: #01182a;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .box-l {
        display: flex;
        align-items: center;
        padding-left: 20px;

        .logo {
            width: 32px;
            height: 32px;
            margin-right: 10px;
        }

        .title {
            height: 60px;
            line-height: 60px;
            font-size: 20px;
        }
    }

    .box-r {
        display: flex;
        align-items: center;
        color: #fff;
        padding-right: 20px;

        .fullscreen-icon {
            margin-right: 20px;
            cursor: pointer;
        }

        .user-name {
            color: #44a2fd;
            cursor: pointer;
            user-select: none;
            margin-left: 4px;
        }
    }
}
</style>
