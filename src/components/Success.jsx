import { CiCircleCheck } from "react-icons/ci";
export const Success = ({ count }) => {
  return (
    <div className="success-block">
      <CiCircleCheck size={"60"} style={{ color: "green" }} />
      {/* <img src="/assets/success.svg" alt="Success" /> */}
      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <button onClick={() => window.location.reload()} className="send-invite-btn">
        Назад
      </button>
    </div>
  );
};
