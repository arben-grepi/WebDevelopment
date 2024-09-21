import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export const GameCardSceleton = () => {
  return (
    <Card>
      <Skeleton>
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Skeleton>
      ;
    </Card>
  );
};
