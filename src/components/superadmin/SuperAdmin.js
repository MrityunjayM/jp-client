import React from "react";
import { Link } from "react-router-dom";
function SuperAdmin() {
  return (
    <div className="text-center mt-5">
      <h4>SuperAdmin control page</h4>
      <Link style={{ margin: 10 }} to="adminuserforgame">
        Add admin user for game
      </Link>
      <Link style={{ margin: 10 }} to="alladminplayer">
        All the admin player
      </Link>
    </div>
  );
}
export default SuperAdmin;
