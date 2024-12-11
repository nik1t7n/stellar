import Button from "./components/buttton/index.jsx";
import Header from "./components/header/index.jsx";
import Input from "./components/input/index.jsx";
import Typography from "./components/typography/index.jsx";
import Tooltip from "./components/tooltip/index.jsx";
import Accordion from "./components/accordion/index.jsx";

function App() {
  return (
    <div>
      <div id="primary_buttons">
        <Button variant="primary" size="lg" btnType="submit">
          lg, primary
        </Button>
        <Button variant="primary" size="md" btnType="reset">
          md, primary
        </Button>
        <Button variant="primary" size="sm" disabled>
          sm, primary
        </Button>
        <Button variant="primary" size="lg">
          Hover
        </Button>
      </div>

      <div id="bordered_buttons">
        <Button variant="bordered" size="lg">
          lg, bordered
        </Button>
        <Button variant="bordered" size="md" disabled>
          md, bordered
        </Button>
        <Button variant="bordered" size="sm">
          sm, bordered
        </Button>
        <Button variant="bordered" size="lg">
          Hover
        </Button>
      </div>

      <div id="inputs">
        <Input type="text" placeholder="Enter your name" />
        <Input
          type="text"
          placeholder="Enter your email"
          label="Example of Focus"
        />
        <Input
          type="text"
          placeholder="Enter your password"
          danger="true"
          label="Example of Danger"
        />
        <Input
          type="text"
          placeholder="Enter your password"
          disabled
          label="Example of Disabled"
          value="Disabled baby ;)"
        />
      </div>

      <div id="typographies">
        <Typography textSize="lg">
          LG. Our mission is to redefine the model of learning and re-engineer
          its process by providing innovative administrative and instructional
          technologies. Click here for our beliefs. If you are a school
          administrator and would like to use ecourse.org for your classes,
          please create school profiles. Instructors and students may signup
          independent user account. For questions, contact us.
        </Typography>
        <Typography textSize="md">
          MD. Our mission is to redefine the model of learning and re-engineer
          its process by providing innovative administrative and instructional
          technologies. Click here for our beliefs. If you are a school
          administrator and would like to use ecourse.org for your classes,
          please create school profiles. Instructors and students may signup
          independent user account. For questions, contact us.
        </Typography>
        <Typography textSize="sm">
          SM. Our mission is to redefine the model of learning and re-engineer
          its process by providing innovative administrative and instructional
          technologies. Click here for our beliefs. If you are a school
          administrator and would like to use ecourse.org for your classes,
          please create school profiles. Instructors and students may signup
          independent user account. For questions, contact us.
        </Typography>
      </div>

      <div id="headers">
        <Header level={1}>Header 1</Header>
        <Header level={2}>Header 2</Header>
        <Header level={3}>Header 3</Header>
        <Header level={4}>Header 4</Header>
        <Header level={5}>Header 5</Header>
        <Header level={6}>Header 6</Header>
      </div>

      <div id="tooltips">
        <Tooltip text="i am tooltip" position="top">
          Top
        </Tooltip>
        <Tooltip text="i am tooltip" position="right">
          Right
        </Tooltip>
        <Tooltip text="i am tooltip" position="left">
          Left
        </Tooltip>
        <Tooltip text="i am tooltip" position="bottom">
          Bottom
        </Tooltip>
      </div>

      <div id="accordions">
        <Accordion title="Accordion 1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Accordion>
        <Accordion title="Accordion 2" defaultOpen>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Accordion>
      </div>
    </div>
  );
}

export default App;
