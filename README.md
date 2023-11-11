# Cấu trú dự án

- components

  - Chứa những cái component được tái sử dụng, chủ yếu dùng render UI ,không bao gôm những cái logic (call api)
  - VD : Button, Select, Input, Card...

- modules/modules-name

  - Chứa các components cấu thành 1 pages, trong các components này sẽ chứa các logic như call api
  - VD: home - Banner - Cinema - ListMovie

- layouts

  - Chứa các components layout

- apis
  - Chứa cấu hình mặc định của api
  - Chứa các function định nghĩa api
