import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/root.jsx"),
  route("login", "routes/login.jsx"),
  route("dashboard", "routes/dashboard.jsx"),
  route("appointments", "routes/appointments.jsx"),
  route("patients", "routes/patients.jsx"),
];
