<template>
    <div class="containers">
        <!-- 判断模糊搜索是否有值  没有则显示正常列表 -->
        <div class="block-list" v-if="searchList.length==0">
            <div v-if="dataList.length">
                <el-table :data="dataList">
                        <el-table-column prop="title" label="标题"></el-table-column>
                        <el-table-column prop="type" label="状态">
                            <template slot-scope="scope"><span>{{approvalObj[scope.row.type]}}</span></template>
                        </el-table-column>
                        <el-table-column prop="create_time" label="创建时间" show-overflow-tooltip></el-table-column>

                        <el-table-column label="操作" align="center" width="150" fixed="right">
                            <template slot-scope="scope">
                                <el-dropdown>
                                    <el-button type="primary" plain>
                                        <i class="iconfont iconcaozuo"></i> 操作配置
                                    </el-button>
                                    <el-dropdown-menu slot="dropdown" class="page-content-table-operate">
                                        <el-dropdown-item>
                                            <el-button type="primary" @click="viewClick(scope.row)" size="mini">查看</el-button>
                                        </el-dropdown-item>
                                        <el-dropdown-item v-if="scope.row.type==2">
                                            <el-button type="warning" @click="viewClick(scope.row)" size="mini">重新发布</el-button>
                                        </el-dropdown-item>
                                        <el-dropdown-item v-if="scope.row.type==2||scope.row.type==1">
                                            <el-button type="danger" @click="viewClick(scope.row)" size="mini">删除</el-button>
                                        </el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="pagination">
                    <el-pagination
                        background
                        layout="total, sizes, prev, pager, next"
                        :current-page.sync="currPage"
                        :page-size="pageSize"
                        :page-sizes="[5,10,20,50,100,200]"
                        :total="total"
                        @current-change="currChange"
                        @size-change="sizeChange"
                    ></el-pagination>
                </div>
            </div>

            <!-- 正常列表查询无数据 -->
            <emptys v-else></emptys>
        </div>
        <!-- 模糊搜索有值  -->
        <div v-else>
            <div v-for="(item,index) in searchList" :key="index" class="evey-item">
                <router-link class="evey-item-a" :to="`${item.path}/info?id=${item.id}`">
                    <div class="list-item">
                        <div class="block" v-if="item.icon_src">
                            <el-image
                                style="width: 100px; height: 100px"
                                :src="'http://localhost:76'+item.icon_src"
                                fit="scale-down"
                            ></el-image>
                        </div>
                        <h2>
                            <el-tag type="success">{{item.category_title}}</el-tag>
                            {{item.title}}
                        </h2>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getListPage } from "./api/index";

export default {
    components: {},
    computed: {
        ...mapGetters(["searchList"])
    },
    data() {
        return {
            visible: false,
            dataList: [],
            approvalObj:{
                1:'待审核',
                2:'已驳回',
                3:'已通过'
            },
            pageSize:10,
            currPage:1,
            total:0,
            lastPage:0
        };
    },
    created() {
        this.initData();
    },
    methods: {
        async initData() {
            let param = {
                pageSize:this.pageSize,
                currPage:this.currPage,
            }
            let res = await getListPage(param);
            if (res.success) {
                this.dataList = res.data.data;
                this.pageSize=res.data.pageSize;
                this.total=res.data.total;
                // this.lastPage=res.data.last_page;
                this.currPage=res.data.currPage;
            }
        },
        //分页
        currChange(data){
            this.currPage=data;
            this.initData();
        },
        //条数
        sizeChange(size){
            this.pageSize=size;
            this.initData();
        }

        
    }
};
</script>

<style lang="less" scoped>
.containers {
    position: relative;
    .block-list {
        .evey-item-a {
            color: black;
            .list-item {
                display: flex;
                flex-direction: row;
                .block {
                    margin-right: 20px;
                }
            }
        }
        .bottom-box {
            background: #f8f8f8;
            box-sizing: border-box;
            padding-left: 20px;
            border-radius: 8px;
            .btn {
                display: inline-block;
                margin-left: 20px;
                span {
                    color: #555666 !important;
                }
            }
            .type-box {
                margin-left: 20px;
            }
        }
    }
    .evey-item {
        padding: 20px 30px;
        background-color: #f8f8f8;
        border-radius: 15px;
        margin-bottom: 25px;
        .evey-item-a {
            color: black;
            .list-item {
                display: flex;
                flex-direction: row;
                .block {
                    margin-right: 20px;
                }
            }
        }
    }
}
</style>