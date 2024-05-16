import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import Modal from "../_components/modal"
import { Sidebar } from "../_components/sidebar"
import { Header } from "../_components/header"

export default function User() {
  return (
    <div className="flex min-h-screen">
      <Sidebar/>
      <div className="flex-1 bg-gray-100 dark:bg-gray-950">
        <Header/>
        <div className="container mx-auto max-w-6xl space-y-8 py-12 sm:py-16 lg:py-20">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold sm:text-4xl">Usuários</h1> 
          </div>
          <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
            <table className="w-full table-auto">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="px-6 py-4 text-left font-medium text-gray-900 dark:text-gray-100">id</th>
                  <th className="px-6 py-4 text-left font-medium text-gray-900 dark:text-gray-100">Nome</th>
                  <th className="px-6 py-4 text-left font-medium text-gray-900 dark:text-gray-100">Email</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                <tr>
                  <td className="px-6 py-4">1</td>
                  <td className="px-6 py-4">john@example.com</td>
                  <td className="px-6 py-4">Admin</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Jane Smith</td>
                  <td className="px-6 py-4">jane@example.com</td>
                  <td className="px-6 py-4">Manager</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Bob Johnson</td>
                  <td className="px-6 py-4">bob@example.com</td>
                  <td className="px-6 py-4">User</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Sarah Lee</td>
                  <td className="px-6 py-4">sarah@example.com</td>
                  <td className="px-6 py-4">User</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Michael Chen</td>
                  <td className="px-6 py-4">michael@example.com</td>
                  <td className="px-6 py-4">Manager</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-end">
            <Modal/>
          </div>
        </div>
      </div>
    </div>
  )
}

function PlusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}