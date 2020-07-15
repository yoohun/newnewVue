<template>
  <div id="sidebar">
    <div class="sidebar-left">
        <div v-for="(item,index) in sidebar" :key="index">
            <span>{{item.title}}</span>
        </div>
        <div v-for="(item,index) in activeItem" :key="index">
            <p>{{item.title}}</p>
            <span v-for="(child, childindex) in item.subs" :key="childindex">
                {{child.title}}
            </span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    computed: {
    },
  data() {
    return {
        activeItem:[{
              title: "系统首页1",
              subs: [
                {
                  title: "系统首页",
                  active: true,
                  path: "/home/home"
                },
                {
                  title: "系统通知",
                  active: true,
                  path: "/home/message"
                }
              ]
            },{
              title: "系统首页2",
              subs: [
                {
                  title: "系统首页",
                  active: true,
                  path: "/home/home"
                },
                {
                  title: "系统通知",
                  active: true,
                  path: "/home/message"
                }
              ]
            }],
        firstLine:[],
      sidebar: [
        {
          icon: "icon-shouye",
          title: "首页",
          active: true,
          subs: [
            {
              title: "系统首页",
              subs: [
                {
                  title: "系统首页",
                  active: true,
                  path: "/home/home"
                },
                {
                  title: "系统通知",
                  active: true,
                  path: "/home/message"
                }
              ]
            }
          ]
        },{
          icon: "icon-shouye",
          title: "首页2",
          active: true,
          subs: [
            {
              title: "系统首页2",
              subs: [
                {
                  title: "系统首页2",
                  active: true,
                  path: "/home/home"
                },
                {
                  title: "系统通知2",
                  active: true,
                  path: "/home/message"
                }
              ]
            }
          ]
        },{
          icon: "icon-shouye",
          title: "首页3",
          active: true,
          subs: [
            {
              title: "系统首页3",
              subs: [
                {
                  title: "系统首页3",
                  active: true,
                  path: "/home/home"
                },
                {
                  title: "系统通知3",
                  active: true,
                  path: "/home/message"
                }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>

<style>
</style>