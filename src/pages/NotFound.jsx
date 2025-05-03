import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center p-4">
      <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
      <p className="mb-6">Could not find the requested page</p>
      <Link to="/" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
        Return to Home
      </Link>
    </div>
  )
}

export default NotFound
