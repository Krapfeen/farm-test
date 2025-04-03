import HomeView from '@/views/HomeView.vue'
import AddProjectView from '@/views/AddProjectViewOld.vue'
import ProjectView from '@/views/ProjectView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import IncomesView from '@/views/IncomesView.vue'
import AddIncomeView from '@/views/AddIncomeView.vue'
import DetailProjectView from '@/views/DetailProjectView.vue'
import UpdateProjectView from '@/views/UpdateProjectView.vue'
import AddProjectViewOld from '@/views/AddProjectViewOld.vue'
import ExpensesView from '@/views/ExpensesView.vue'
import AddExpensesView from '@/views/AddExpensesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/projects/',
    name: 'projects',
    component: ProjectsView,
  },
  {
    path: '/projects/add/',
    name: 'add-project',
    component: AddProjectViewOld,
  },
  {
    path: '/projects/:id/',
    name: 'project',
    component: DetailProjectView,
  },
  {
    path: '/projects/:id/update',
    name: 'update-project',
    component: UpdateProjectView,
  },
  {
    path: '/:group/',
    name: 'group-project',
    component: ProjectView,
  },
  {
    path: '/incomes/',
    name: 'incomes',
    component: IncomesView,
  },
  {
    path: '/incomes/add',
    name: 'add-incomes',
    component: AddIncomeView,
  },
  {
    path: '/incomes/:id/add',
    name: 'add-incomes-project',
    component: AddIncomeView,
  },
  {
    path: '/expenses/',
    name: 'expenses',
    component: ExpensesView,
  },
  {
    path: '/expenses/add',
    name: 'add-expenses',
    component: AddExpensesView,
  },
  {
    path: '/expenses/:id/add',
    name: 'add-expenses-project',
    component: AddExpensesView,
  },
]

export default routes
