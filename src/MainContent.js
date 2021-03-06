import {
  Box,
  Container,
  Header,
  SpaceBetween,
} from "@awsui/components-react";
import PropTypes from "prop-types";

const MainContent = ({ componentName }) => {
  return (
    <Container
      header={<Header variant="h2" children={componentName} />}
      variant="stacked"
    >
      <SpaceBetween direction="vertical" size="l">
        <Box variant="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Box>

        
      </SpaceBetween>
    </Container>
  );
};

MainContent.propTypes = {
  componentName: PropTypes.string.isRequired,
};

MainContent.defaultProps = {
  componentName: "Component Name",
};

export default MainContent;
