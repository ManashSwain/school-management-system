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
import announcementIcon from '../../public/icons/announcement.png';
import assignmetIcon from '../../public/icons/assignments.png';
import attendanceIcon from '../../public/icons/attendance.png';
import classesIcon from '../../public/icons/classes.png';
import eventsIcon from '../../public/icons/events.png';
import examIcon from '../../public/icons/exam.png';
import homeIcon from '../../public/icons/homeicon.jpeg';
import lessonsIcon from '../../public/icons/lessons.png';
import logoutIcon from '../../public/icons/logout.png';
import messagesIcon from '../../public/icons/messages.png';
import parentIcon from '../../public/icons/parent.png';
import profileIcon from '../../public/icons/profile.png'; 
import settingsIcon from '../../public/icons/settings.png';
import studentIcon from '../../public/icons/student.png';
import teacherIcon from '../../public/icons/teacher.jpeg';
import Image from "next/image";

export function AppSidebar() {
    const menuItems = [
        {icon: homeIcon ,label:"Home" , href:"/", visible:["admin"]},
        {icon: teacherIcon,label:"Teachers" , href:"/teacher", visible:["admin"]},
        {icon: studentIcon,label:"Students" , href:"/student", visible:["admin"]},
        {icon: parentIcon,label:"Parents" , href:"/parent", visible:["admin"]},
        {icon: classesIcon,label:"Classes" , href:"", visible:["admin"]},
        {icon: lessonsIcon,label:"Lessons" , href:"", visible:["admin"]},
        {icon: examIcon,label:"Exams" , href:"", visible:["admin"]},
        {icon: assignmetIcon,label:"Assignments" , href:"", visible:["admin"]},
        {icon: attendanceIcon,label:"Attendance" , href:"", visible:["admin"]},
        {icon: eventsIcon,label:"Events" , href:"", visible:["admin"]},
        {icon: messagesIcon,label:"Messages" , href:"", visible:["admin"]},
        {icon: announcementIcon,label:"Announcements" , href:"", visible:["admin"]},
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

            <SidebarMenuItem className="flex flex-col">
              {/* <SidebarMenuButton> */}
                {menuItems.map((item)=>{
                  return <div key={item.label} className="flex   items-center gap-2">
                      <Image src={item.icon} alt={item.label} width={12} height={12}/>
                      <label htmlFor={item.label}>{item.label}</label>
                  </div> 
                })}
              {/* </SidebarMenuButton> */}
            </SidebarMenuItem>

            {/* <SidebarMenuItem>
              <SidebarMenuButton>Teachers</SidebarMenuButton>
            </SidebarMenuItem> */}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="px-2 text-sm text-sidebar-foreground/70">v0.1</div>
      </SidebarFooter>
    </Sidebar>
  )
}