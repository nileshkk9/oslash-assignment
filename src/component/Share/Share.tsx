import {
  Button,
  Col,
  Divider,
  Row,
  Typography,
  Input,
  Cascader,
  Select,
  SelectProps,
} from "antd";
import { ShareAltOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Switch } from "antd";
import "./Share.css";
import { access, allUsers } from "./Utils/Constants";
const { Search } = Input;
const { Text, Title } = Typography;

const Share = () => {
  const [modalState, setModalState] = useState(false);
  const [inviteState, setInviteState] = useState(false);
  const [options, setOptions] = useState([]);

  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value: string) => console.log(value);
  const handleSearchClick = () => {
    fetchUsers();
    setInviteState(true);
  };

  const fetchUsers = () => {
    const tmp: any = [];
    allUsers.forEach((e: any) => {
      tmp.push({
        label: e.title,
        value: e.title,
      });
    });

    setOptions(tmp);
    console.log(options);
  };

  return (
    <div>
      <Button type="primary" size={"large"}>
        Share
        <ShareAltOutlined />
      </Button>
      {/* switcher PART */}

      <Col xs={24} sm={24} md={15} lg={13} xl={10} className="share-div">
        <Row className="switcher-div">
          <Title level={5}>Share to web</Title>
          <Text type="secondary">Publish and share link with anyone</Text>
          <Switch defaultChecked onChange={onChange} />
        </Row>

        <Divider />

        {/* invite input with button */}
        <div>
          {!inviteState ? (
            <Search
              placeholder="input search text"
              allowClear
              enterButton="Invite"
              size="large"
              onSearch={onSearch}
              onClick={handleSearchClick}
            />
          ) : (
            <Row justify="space-around">
              <Col flex={"100px"}>
                <Select
                  mode="multiple"
                  allowClear
                  style={{ width: "100%" }}
                  placeholder="Please select"
                  //   defaultValue={}
                  onChange={handleChange}
                  options={options}
                />
              </Col>
              <Col flex={1}>
                <Select
                  defaultValue={access[0].value}
                  style={{ width: 120 }}
                  bordered={false}
                  options={access}
                />
              </Col>
              <Col flex={1}>
                <Button>Invite</Button>
              </Col>
            </Row>
          )}
        </div>
        <Divider />

        {/* people/group who has access */}
        <div></div>

        {/* footer */}
        <div></div>
      </Col>
    </div>
  );
};

export default Share;
