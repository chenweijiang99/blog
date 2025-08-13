<template>
    <div class="app-container">
        <!-- 搜索表单 -->
        <div class="search-wrapper">
            <el-form :model="queryParams" ref="queryFormRef" inline>

                <el-form-item label="资源名" prop="name">
                    <el-input v-model="queryParams.name" placeholder="请输入资源名" clearable @keyup.enter="handleQuery" />
                </el-form-item>
                <el-form-item label="分类" prop="category">

                    <el-select v-model="queryParams.category" placeholder="请选择分类">
                        <el-option v-for="category in categories" :key="category.id" :label="category.label"
                            :value="category.value" />
                    </el-select>
                </el-form-item>



                <el-form-item label="状态" prop="status">
                    <el-select v-model="queryParams.status" placeholder="请选择状态" clearable>
                        <el-option label="未通过" value="0" />
                        <el-option label="待审核" value="1" />
                        <el-option label="通过" value="2" />
                    </el-select>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" icon="Search" @click="handleQuery">搜索</el-button>
                    <el-button icon="Refresh" @click="resetQuery">重置</el-button>
                </el-form-item>
            </el-form>

        </div>
        <el-card class="box-card">
            <!-- 操作工具栏 -->
            <template #header>
                <el-button type="primary" plain icon="Plus" @click="handleAdd">新增
                </el-button>
                <el-button type="danger" plain icon="Delete" :disabled="selectedIds.length === 0"
                    @click="handleBatchDelete">批量删除
                </el-button>
            </template>

            <!-- 数据表格 -->
            <el-table v-loading="loading" :data="dataList" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55" align="center" />
                <el-table-column label="资源名" align="center" prop="name" />
                <el-table-column label="分类" align="center" prop="category">
                    <template #default="scope">
                        <el-tag :type="categories.find(item => item.value === scope.row.category).style">{{
                            categories.find(item => item.value === scope.row.category).label}}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="下载量" align="center" prop="downloads" />
                <el-table-column label="是否免费" align="center" prop="isFree">
                    <template #default="scope">
                        <el-tag :type="scope.row.isFree === 1 ? 'primary' : 'danger'">{{ scope.row.isFree === 1 ? '是' :
                            '否' }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="付费方式" align="center" prop="payType" />
                <el-table-column label="网盘地址" align="center" prop="panPath" />
                <el-table-column label="网盘验证码" align="center" prop="panCode" />
                <el-table-column label="状态" align="center" prop="status">
                    <template #default="scope">
                        <el-tag
                            :type="scope.row.status === 0 ? 'danger' : scope.row.status === 1 ? 'primary' : 'success'">{{
                                scope.row.status === 0 ? '未通过' : scope.row.status === 1 ? '待审核' : '通过' }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="创建时间" align="center" prop="createTime" />
                <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
                    <template #default="scope">
                        <el-button type="primary" link icon="Edit" @click="handleUpdate(scope.row)">修改
                        </el-button>
                        <el-button type="danger" link icon="Delete" @click="handleDelete(scope.row)">删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>

            <!-- 分页工具栏 -->
            <div class="pagination-container">
                <el-pagination background v-model:current-page="queryParams.pageNum"
                    v-model:page-size="queryParams.pageSize" :page-sizes="[10, 20, 30, 50]" :total="total"
                    layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange"
                    @current-change="handleCurrentChange" />
            </div>

            <!-- 添加或修改对话框 -->
            <el-dialog v-model="open" :title="title" width="500px" append-to-body>
                <el-form ref="formRef" :model="form" :rules="rules" label-width="80px">

                    <el-form-item label="资源名称" prop="name">
                        <el-input v-model="form.name" placeholder="请输入资源名称" />
                    </el-form-item>
                    <el-form-item label="分类" prop="category">
                        <el-select v-model="form.category" placeholder="请选择分类">
                            <el-option v-for="category in categories" :key="category.id" :label="category.label"
                                :value="category.value" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="资源类型" prop="isFree">
                        <el-radio-group v-model="form.isFree">
                            <el-radio :label="1">免费</el-radio>
                            <el-radio :label="0">付费</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="状态" prop="status">
                       <el-select v-model="form.status" placeholder="请选择状态" clearable>
        <el-option label="未通过" :value="0" />
        <el-option label="待审核" :value="1" />
        <el-option label="通过" :value="2" />
    </el-select>
                    </el-form-item>
                    <el-form-item label="网盘地址" prop="panPath">
                        <el-input v-model="form.panPath" placeholder="请输入网盘地址" />
                    </el-form-item>
                    <el-form-item label="提取码" prop="panCode">
                        <el-input v-model="form.panCode" placeholder="请输入提取码" />
                    </el-form-item>
                </el-form>
                <template #footer>
                    <div class="dialog-footer">
                        <el-button type="primary" @click="submitForm">确 定</el-button>
                        <el-button @click="cancel">取 消</el-button>
                    </div>
                </template>
            </el-dialog>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { ElMessage, ElMessageBox } from 'element-plus'
import {
    listSysResourceApi,
    detailSysResourceApi,
    deleteSysResourceApi,
    addSysResourceApi,
    updateSysResourceApi
} from '@/api/system/resource'
import { getDictDataApi } from '@/api/system/dict'


// 状态映射
const statusMap = {
  0: '未通过',
  1: '待审核',
  2: '通过'
}

const statusTypeMap = {
  0: 'danger',
  1: 'primary',
  2: 'success'
}

const categories = ref<any[]>([])


// 遮罩层
const loading = ref(true)
// 选中数组
const selectedIds = ref<any[]>([])
// 总条数
const total = ref(0)
// 表格数据
const dataList = ref([])
// 弹出层标题
const title = ref('')
// 是否显示弹出层
const open = ref(false)
// 查询参数
const queryParams = reactive({
    pageNum: 1,
    pageSize: 10,
    id: undefined,
    userId: undefined,
    name: undefined,
    category: undefined,
    downloads: undefined,
    isFree: undefined,
    payType: undefined,
    panPath: undefined,
    panCode: undefined,
    status: undefined,
    createTime: undefined,
})

// 表单参数
const form = reactive<any>({})
// 表单校验
const rules = reactive({
    name: [
        { required: true, message: '请输入资源名称', trigger: 'blur' },
        { min: 2, max: 50, message: '长度在 2 到 50 个字符', trigger: 'blur' }
    ],
    category: [
        { required: true, message: '请选择资源分类', trigger: 'change' }
    ],
    type: [
        { required: true, message: '请选择资源类型', trigger: 'change' }
    ],
    status: [
        { required: true, message: '请选择资源状态', trigger: 'change' }
    ],
    panPath: [
        { required: true, message: '请输入网盘地址', trigger: 'blur' }
    ],
    panCode: [
        { required: true, message: '请输入提取码', trigger: 'blur' }
    ]
})

const queryFormRef = ref()
const formRef = ref()

/** 查询列表 */
const getList = () => {
    loading.value = true
    listSysResourceApi(queryParams).then(response => {
        dataList.value = response.data.records
        total.value = response.data.total
        loading.value = false
    })
}

/** 取消按钮 */
const cancel = () => {
    open.value = false
    reset()
}

/** 表单重置 */
const reset = () => {
    form.value = {
        id: undefined,
        userId: undefined,
        name: undefined,
        category: undefined,
        downloads: undefined,
        isFree: undefined,
        payType: undefined,
        panPath: undefined,
        panCode: undefined,
        status: undefined,
        createTime: undefined
    }
    formRef.value?.resetFields()
}

/**
   * 获取资源分类
   */
const getCategory = () => {
    getDictDataApi('sys_resource_category').then(res => {
        categories.value = res.data
    })
}

/** 搜索按钮操作 */
const handleQuery = () => {
    queryParams.pageNum = 1
    getList()
}

/** 重置按钮操作 */
const resetQuery = () => {
    queryFormRef.value?.resetFields()
    handleQuery()
}

/** 多选框选中数据 */
const handleSelectionChange = (selection: { id: any }[]) => {
    selectedIds.value = selection.map(item => item.id)
}

/** 新增按钮操作 */
const handleAdd = () => {
    reset()
    open.value = true
    title.value = "添加资源表"
}

/** 修改按钮操作 */
const handleUpdate = (row: any) => {
    reset()
    detailSysResourceApi(row.id).then(response => {
        Object.assign(form, response.data)
        open.value = true
        title.value = "修改资源表"
    })
}

/** 提交按钮 */
const submitForm = () => {
    formRef.value?.validate((valid: any) => {
        if (valid) {
            if (form.id !== undefined) {
                updateSysResourceApi(form).then(response => {
                    ElMessage.success("修改成功")
                    open.value = false
                    getList()
                })
            } else {
                addSysResourceApi(form).then(response => {
                    ElMessage.success("新增成功")
                    open.value = false
                    getList()
                })
            }
        }
    })
}

/** 批量删除按钮操作 */
const handleBatchDelete = () => {
    if (!selectedIds.value.length) {
        return
    }
    ElMessageBox.confirm('是否确认删除"' + selectedIds.value.length + '"条数据项?', "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
    }).then(() => {
        deleteSysResourceApi(selectedIds.value)
    }).then(() => {
        getList()
        ElMessage.success("删除成功")
    })
}

/** 删除按钮操作 */
const handleDelete = (row: any) => {
    ElMessageBox.confirm('是否确认删除名称为"' + row.name + '"的数据项?', "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
    }).then(() => {
        deleteSysResourceApi(row.id)
    }).then(() => {
        getList()
        ElMessage.success("删除成功")
    })
}


// 添加分页方法
const handleSizeChange = (val: any) => {
    queryParams.pageSize = val
    getList()
}

const handleCurrentChange = (val: any) => {
    queryParams.pageNum = val
    getList()
}

onMounted(() => {
    getCategory()
    getList()
})
</script>
