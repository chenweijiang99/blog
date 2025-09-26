
# 开发规范指南

为保证代码质量、可维护性、安全性与可扩展性，请在开发过程中严格遵循以下规范。

## 一、项目基本信息

- **工作目录**: `D:\shiyi-blog-master\blog`
- **操作系统**: Windows 11
- **代码作者**: 17745
- **构建工具**: Maven
- **Java 版本**: JDK 1.8.0_452
- **Spring Boot 版本**: 2.7.0
- **项目名称**: mojian-blog

---

## 二、目录结构

```
blog
├── mojian-admin
│   └── src
│       └── main
│           └── java
│               └── com
│                   └── mojian
│                       ├── controller
│                       │   ├── article
│                       │   ├── dashboard
│                       │   ├── message
│                       │   ├── monitor
│                       │   ├── site
│                       │   ├── system
│                       │   └── tool
│                       └── service
│                           └── impl
├── mojian-api
│   └── src
│       └── main
│           └── java
│               └── com
│                   └── mojian
│                       ├── controller
│                       │   ├── album
│                       │   ├── article
│                       │   ├── chat
│                       │   ├── comment
│                       │   ├── friend
│                       │   ├── home
│                       │   ├── message
│                       │   ├── moment
│                       │   ├── notifications
│                       │   ├── resource
│                       │   ├── sign
│                       │   ├── tag
│                       │   └── user
│                       ├── dao
│                       ├── entity
│                       └── service
│                           └── impl
├── mojian-auth
│   └── src
│       └── main
│           └── java
│               └── com
│                   └── mojian
│                       ├── config
│                       │   ├── properties
│                       │   └── satoken
│                       ├── controller
│                       ├── dto
│                       └── service
│                           └── impl
├── mojian-commom
│   └── src
│       └── main
│           └── java
│               └── com
│                   └── mojian
│                       ├── annotation
│                       ├── aspect
│                       ├── common
│                       ├── config
│                       │   ├── filter
│                       │   ├── interceptor
│                       │   └── mybatisplus
│                       ├── dto
│                       │   ├── article
│                       │   ├── feedback
│                       │   └── user
│                       ├── entity
│                       ├── enums
│                       ├── exception
│                       ├── mapper
│                       ├── utils
│                       ├── vo
│                       │   ├── article
│                       │   ├── cache
│                       │   ├── chat
│                       │   ├── comment
│                       │   ├── dashboard
│                       │   ├── feedback
│                       │   ├── menu
│                       │   ├── moment
│                       │   ├── notifications
│                       │   ├── resource
│                       │   ├── server
│                       │   ├── tag
│                       │   └── user
│                       └── websocket
├── mojian-file
│   └── src
│       └── main
│           └── java
│               └── com
│                   └── mojian
│                       ├── controller
│                       ├── init
│                       ├── service
│                       │   └── impl
│                       └── utils
├── mojian-quartz
│   └── src
│       └── main
│           └── java
│               └── com
│                   └── mojian
│                       ├── controller
│                       ├── dto
│                       ├── quartz
│                       ├── service
│                       │   └── impl
│                       └── utils
└── mojian-server
    └── src
        └── main
            ├── java
            │   └── com
            │       └── mojian
            └── resources
                ├── mapper
                └── templates
```

---

## 三、技术栈要求

- **主框架**：Spring Boot 2.7.0
- **语言版本**：Java 8
- **核心依赖**：
  - Spring Web Starter
  - MyBatis Plus
  - Sa-Token 权限控制
  - Lombok
  - Redis 支持
  - MySQL 驱动
  - Knife4j 接口文档
  - 用户代理解析（UserAgentUtils）
  - OSHI 系统监控库
  - Velocity 模板引擎
  - Hutool 工具集
  - FastJSON 序列化
  - IP 地址归属地查询（ip2region）

---

## 四、分层架构规范

| 层级        | 职责说明                         | 开发约束与注意事项                                               |
|-------------|----------------------------------|----------------------------------------------------------------|
| **Controller** | 处理 HTTP 请求与响应，定义 API 接口 | 不得直接访问数据库，必须通过 Service 层调用                  |
| **Service**    | 实现业务逻辑、事务管理与数据校验   | 必须通过 Mapper 或 Repository 访问数据库；返回 DTO 而非 Entity（除非必要） |
| **Mapper/DAO** | 数据库访问与持久化操作             | 使用 MyBatis Plus 提供的接口或 XML 映射                        |
| **Entity**     | 映射数据库表结构                   | 不得直接返回给前端（需转换为 DTO）；包名统一为 `entity`         |

### 接口与实现分离

- 所有接口实现类需放在接口所在包下的 `impl` 子包中。

---

## 五、安全与性能规范

### 输入校验

- 使用 `@Valid` 和 JSR-303 校验注解（如 `@NotBlank`, `@Size` 等）

- 禁止手动拼接 SQL 字符串，防止 SQL 注入攻击。

### 事务管理

- `@Transactional` 注解仅用于 **Service 层**方法。
- 避免在循环中频繁提交事务，影响性能。

---

## 六、代码风格规范

### 命名规范

| 类型       | 命名方式             | 示例                  |
|------------|----------------------|-----------------------|
| 类名       | UpperCamelCase       | `UserServiceImpl`     |
| 方法/变量  | lowerCamelCase       | `saveUser()`          |
| 常量       | UPPER_SNAKE_CASE     | `MAX_LOGIN_ATTEMPTS`  |

### 注释规范

- 所有类、方法、字段需添加 **Javadoc** 注释。
- 注释应使用中文进行编写以符合团队第一语言习惯。

### 类型命名规范（阿里巴巴风格）

| 后缀 | 用途说明                     | 示例         |
|------|------------------------------|--------------|
| DTO  | 数据传输对象                 | `UserDTO`    |
| DO   | 数据库实体对象               | `UserDO`     |
| BO   | 业务逻辑封装对象             | `UserBO`     |
| VO   | 视图展示对象                 | `UserVO`     |
| Query| 查询参数封装对象             | `UserQuery`  |

### 实体类简化工具

- 使用 Lombok 注解替代手动编写 getter/setter/构造方法：
  - `@Data`
  - `@NoArgsConstructor`
  - `@AllArgsConstructor`

---

## 七、扩展性与日志规范

### 接口优先原则

- 所有业务逻辑通过接口定义（如 `UserService`），具体实现放在 `impl` 包中（如 `UserServiceImpl`）。

### 日志记录

- 使用 `@Slf4j` 注解代替 `System.out.println`

---

## 八、通用规则总结

1. **模块划分清晰**：
   - `mojian-commom`: 通用模块，包含基础组件和公共配置；
   - `mojian-api`: 接口模块，对外暴露 RESTful API；
   - `mojian-admin`: 后台管理系统模块；
   - `mojian-server`: 博客服务启动模块；
   - `mojian-file`: 文件上传处理模块；
   - `mojian-quartz`: 定时任务调度模块；
   - `mojian-auth`: 第三方认证授权模块。

2. **MyBatis Plus 配置优化**：
   - 自动映射驼峰下划线；
   - 关闭缓存机制提升调试效率；
   - 配置全局 ID 自动生成策略；
   - 正确设置字段策略避免无效更新。

3. **Sa-Token 权限体系集成**：
   - 支持多端登录共享 Token；
   - 设置合理的 Token 过期时间；
   - 开启操作日志以便审计追踪。

4. **资源文件存放位置明确**：
   - `application.yml` 中指定了不同环境加载路径；
   - Mapper XML 文件放置于 `resources/mapper` 目录下；
   - 模板文件保存在 `templates` 下。

5. **第三方 SDK 引入合理**：
   - 微信公众号接入、邮件发送、图片存储等均采用标准 SDK 方式引入并封装；
   - 对外部依赖做了兼容性和稳定性评估。

6. **国际化支持预留空间**：
   - 若未来需要支持多语言，则可在 `common` 包内增加 i18n 支持逻辑。

---
