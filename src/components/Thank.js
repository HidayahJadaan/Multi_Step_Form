import thank from "../assets/images/icon-thank-you.svg"


export default function ThankFullComponent() {
  

    return (
      <div className="content-box Thanks">
      <img src={thank} alt="thankImage" />
      <h1>Thank You</h1>
      <p>Thanks for confirming your subscription! We hope you have fun 
        using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
      </div>
    );
  }