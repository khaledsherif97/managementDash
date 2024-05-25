import { Alert,Button,Card,Col,Form,Input,Row,} from "antd";
import axios from "axios";
import { useState } from "react";
import { FallingLines } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const [apiError, setApiError] = useState<string | null>(null);
  const [isLoding, setIsLoding] = useState(false)
  const [form] = Form.useForm(); 

  const handleSubmit = async (values: any) => {
    setApiError(null); 
    try {
      setIsLoding(true)
     await axios.post(
        "http://26.161.87.116/gateway/system/authentication/Login",
        {
          username: values.userName,
          password: values.password,
        }
      );

      navigate("/home");
    } catch (err: any) {
      const message = err.response?.data?.message || "Login failed";
      setIsLoding(false)
      setApiError(message);


      form.setFields([
        {
          name: "userName",
          errors: ["Invalid username or password"],
        },
        {
          name: "password",
          errors: ["Invalid username or password"],
        },
      ]);
    }
  };




  return (
    <Row
      style={{
        backgroundImage: `url(/assets/RegBack.png)`,
        height: "100vh",
        width:"100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Col sm={12} md={8} lg={6}>
        <Card className="login w-full" >
        {apiError && (
            <Alert
              type="error"
              message={apiError}
              showIcon
              style={{ marginBottom: 16 }}
            />
          )}
          <Form
            layout="vertical"
            onFinish={handleSubmit}
            form={form}
            className="w-full"
          >
            <Form.Item
              label="Username"
              name="userName"
              rules={[{ required: true, message: "Username is required" }]}
            >
              <Input
                type="text"
                className="w-full"
                size="large"
                placeholder="Enter Username"
              />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              className="mt-3"
              rules={[{ required: true, message: "Password is required" }]}
            >
              <Input
                type="password"
                className="w-full"
                size="large"
                placeholder="Enter Password"
              />
            </Form.Item>

            <Form.Item className="w-full mt-3">
              <Button type="primary" htmlType="submit" className="w-full">
              {isLoding ? <FallingLines
                            color="#bfdbfe"
                            width="30"
                            visible={true}
                        /> : "Login"}
              </Button>
            </Form.Item>
          </Form>

        </Card>
      </Col>
    </Row>
  )
}

export default Login