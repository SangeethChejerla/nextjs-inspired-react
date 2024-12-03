import { KeyboardNavbar } from './components/keyboardNavbar';

function IndexPage() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-800">
        Welcome to My Website
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        This is the home page. Explore our other pages!
      </p>
      <KeyboardNavbar />
    </div>
  );
}

export default IndexPage;
