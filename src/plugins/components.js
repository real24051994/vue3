import {
  Anchor,
  Avatar,
  AutoComplete,
  Badge,
  Button,
  Carousel,
  Checkbox,
  DatePicker,
  Drawer,
  Dropdown,
  Empty,
  Form,
  Icon,
  Input,
  InputNumber,
  Layout,
  List,
  Menu,
  Modal,
  Popover,
  Progress,
  Radio,
  Rate,
  Select,
  Skeleton,
  Slider,
  Spin,
  Switch,
  Tag,
  TimePicker,
  Tooltip,
  Upload,
  Tree,
  notification,
  Cascader,
  Collapse,
} from "ant-design-vue";
var AntComponents = [
  Button,
  Tooltip,
  Icon,
  Checkbox,
  Radio,
  Switch,
  DatePicker,
  TimePicker,
  Dropdown,
  List,
  Menu,
  Form,
  Input,
  InputNumber,
  Select,
  Modal,
  Carousel,
  Spin,
  Empty,
  Popover,
  Progress,
  Skeleton,
  Drawer,
  Rate,
  Avatar,
  Badge,
  Slider,
  Tag,
  Upload,
  Anchor,
  Layout,
  Tree,
  Cascader,
  Collapse,
  AutoComplete,
];
AntComponents.forEach((item) => {
  Vue.use(item);
});
Vue.prototype.$notification = notification;
