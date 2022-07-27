export default function authHeader() {
  const authtoken = localStorage.getItem("authtoken");
  if (authtoken) {
    return { "x-access-token": authtoken };
  } else {
    return {};
  }
}
