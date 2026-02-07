import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function AppSidebar() {
    const menuItems = [
        {icon: "",label:"Home" , href:"/", visible:["admin"]},
        {icon: "",label:"Teachers" , href:"/teacher", visible:["admin"]},
        {icon: "",label:"Students" , href:"/student", visible:["admin"]},
        {icon: "",label:"Parents" , href:"/parent", visible:["admin"]},
        {icon: "",label:"Classes" , href:"", visible:["admin"]},
        {icon: "",label:"Lessons" , href:"", visible:["admin"]},
        {icon: "",label:"Exams" , href:"", visible:["admin"]},
        {icon: "",label:"Assignments" , href:"", visible:["admin"]},
        {icon: "",label:"Attendance" , href:"", visible:["admin"]},
        {icon: "",label:"Events" , href:"", visible:["admin"]},
        {icon: "",label:"Messages" , href:"", visible:["admin"]},
        {icon: "",label:"Announcements" , href:"", visible:["admin"]},
    ]
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="px-2 text-lg font-semibold">LMS</div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>MENU</SidebarGroupLabel>

          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton isActive>Dashboard</SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton>
                {}
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton>Teachers</SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="px-2 text-sm text-sidebar-foreground/70">v0.1</div>
      </SidebarFooter>
    </Sidebar>
  )
}