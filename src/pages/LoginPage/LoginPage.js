import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import Title from "../../components/Shared/Title";
import { Navigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import { useSearchParams } from "../../hook/useSearchParams";
import "./LoginPage.css";
import { useSelector } from "react-redux";

const LoginPage = () => {
  const { user, loading } = useSelector((state) => state.user);
  const searchParams = useSearchParams();

  if (user) return <Navigate to={searchParams.get("redirect") || "/"} />;

  return (
    <div className="login-page">
      <Title title={"Sign In | Streamify"} />
      <LoginForm />

      {loading && <Loading />}
    </div>
  );
};

export default LoginPage;
