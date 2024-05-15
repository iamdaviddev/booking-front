import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import Modal from "../_components/modal"
import { Sidebar } from "../_components/sidebar"
import { Header } from "../_components/header"

export default function User() {
  return (
    <div>
      
      <Sidebar/>
      <div>
        <Header/>
        <div className="mx-auto max-w-6xl space-y-8 py-12 sm:py-16 lg:py-20">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold sm:text-4xl">User Management</h1>
            <p className="text-gray-500 dark:text-gray-400">Manage your team members and their roles.</p>
          </div>
          <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
            <table className="w-full table-auto">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="px-6 py-4 text-left font-medium text-gray-900 dark:text-gray-100">Name</th>
                  <th className="px-6 py-4 text-left font-medium text-gray-900 dark:text-gray-100">Email</th>
                  <th className="px-6 py-4 text-left font-medium text-gray-900 dark:text-gray-100">Role</th>
                  <th className="px-6 py-4 text-right font-medium text-gray-900 dark:text-gray-100">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                <tr>
                  <td className="px-6 py-4">John Doe</td>
                  <td className="px-6 py-4">john@example.com</td>
                  <td className="px-6 py-4">Admin</td>
                  <td className="px-6 py-4 text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size="icon" variant="ghost">
                          <MoveHorizontalIcon className="h-5 w-5" />
                          <span className="sr-only">User actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Deactivate</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Jane Smith</td>
                  <td className="px-6 py-4">jane@example.com</td>
                  <td className="px-6 py-4">Manager</td>
                  <td className="px-6 py-4 text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size="icon" variant="ghost">
                          <MoveHorizontalIcon className="h-5 w-5" />
                          <span className="sr-only">User actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Deactivate</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Bob Johnson</td>
                  <td className="px-6 py-4">bob@example.com</td>
                  <td className="px-6 py-4">User</td>
                  <td className="px-6 py-4 text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size="icon" variant="ghost">
                          <MoveHorizontalIcon className="h-5 w-5" />
                          <span className="sr-only">User actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Deactivate</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Sarah Lee</td>
                  <td className="px-6 py-4">sarah@example.com</td>
                  <td className="px-6 py-4">User</td>
                  <td className="px-6 py-4 text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size="icon" variant="ghost">
                          <MoveHorizontalIcon className="h-5 w-5" />
                          <span className="sr-only">User actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Deactivate</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Michael Chen</td>
                  <td className="px-6 py-4">michael@example.com</td>
                  <td className="px-6 py-4">Manager</td>
                  <td className="px-6 py-4 text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size="icon" variant="ghost">
                          <MoveHorizontalIcon className="h-5 w-5" />
                          <span className="sr-only">User actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Deactivate</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
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

function MoveHorizontalIcon(props: any) {
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
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
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