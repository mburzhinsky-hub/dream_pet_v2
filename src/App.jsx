import { AccessGate } from './components/AccessGate.jsx';
import { Header } from './components/Header.jsx';
import { routeAccess } from './data/roles.js';
import { useHashRoute } from './hooks/useHashRoute.js';
import { usePuppies } from './hooks/usePuppies.js';
import { usePuppyFilters } from './hooks/usePuppyFilters.js';
import { useRole } from './hooks/useRole.js';
import { AccountPage } from './pages/AccountPage.jsx';
import { AdminPage } from './pages/AdminPage.jsx';
import { CatalogPage } from './pages/CatalogPage.jsx';
import { GuidesPage } from './pages/GuidesPage.jsx';
import { LoginPage } from './pages/LoginPage.jsx';
import { NotFoundPage } from './pages/NotFoundPage.jsx';
import { RegisterPage } from './pages/RegisterPage.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { KennelPage } from './pages/KennelPage.jsx';
import { PuppyDetailsPage } from './pages/PuppyDetailsPage.jsx';

export function App() {
  const route = useHashRoute();
  const { role, setRole } = useRole();
  const puppyStore = usePuppies();
  const filterState = usePuppyFilters(puppyStore.puppies);

  const pageProps = {
    ...filterState,
    puppies: filterState.filteredPuppies,
  };

  function renderPage() {
    switch (route.name) {
      case '/catalog':
        return <CatalogPage {...pageProps} />;
      case '/puppy':
        return <PuppyDetailsPage puppy={puppyStore.findPuppy(route.puppyId)} />;
      case '/login':
        return <LoginPage role={role} onRoleChange={setRole} />;
      case '/register':
        return <RegisterPage onRoleChange={setRole} />;
      case '/kennels':
        return <KennelPage onAdd={puppyStore.addPuppy} />;
      case '/account':
        return <AccountPage puppies={puppyStore.puppies} onUpdate={puppyStore.updatePuppy} onDelete={puppyStore.deletePuppy} />;
      case '/admin':
        return <AdminPage puppies={puppyStore.puppies} onUpdate={puppyStore.updatePuppy} onDelete={puppyStore.deletePuppy} />;
      case '/guides':
        return <GuidesPage />;
      case '/':
        return <HomePage {...pageProps} />;
      case '/404':
      default:
        return <NotFoundPage path={route.path} />;
    }
  }

  return (
    <>
      <Header role={role} onRoleChange={setRole} />
      <main>
        <AccessGate role={role} allowedRoles={routeAccess[route.name] || routeAccess['/']}>
          {renderPage()}
        </AccessGate>
      </main>
    </>
  );
}
