import { useState } from "react";
import TextArea from "antd/es/input/TextArea";
import Form from "antd/es/form";
import Button from "antd/es/button";
import { Container, MainTitle, SubTitle, Content } from "./LandingPage.styles";

interface ResponseBody {
  success: boolean;
  message: string;
  submissionId?: number;
  data?: any;
}

function LandingPage() {
  const [form] = Form.useForm();
  const [submitResponse, setSubmitResponse] = useState<ResponseBody | null>(
    null,
  );

  const onFinish = async (formData: { message: string }) => {
    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    setSubmitResponse(await response.json());
  };

  return (
    <Container>
      <MainTitle>Pairing Playground</MainTitle>
      <SubTitle>This is where the magic happens</SubTitle>
      <Content>
        {submitResponse && (
          <div data-testid="submit-response">
            <h3>Response:</h3>
            <pre>{JSON.stringify(submitResponse, null, 2)}</pre>
          </div>
        )}
        <Form
          form={form}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
          autoComplete="off"
        >
          <Form.Item label="message" name="message">
            <TextArea />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Container>
  );
}

export default LandingPage;
