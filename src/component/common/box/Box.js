import { Box, Heading, Text } from 'grommet';
const BoxComponent = ({title, para}) => {
    return (
        <Box
            pad="small"
            background="background-front"
            align="start"
            flex
            round="small"
            elevation="small"
        >
            <Heading margin="none" level="4">{title}</Heading>
            <Text margin="none">{para}</Text>
        </Box>
    )
}
export default BoxComponent;