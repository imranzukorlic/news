import React, { useState } from "react";
import { Pagination, Grid } from "@nextui-org/react";

const Paginate = ({ initialPage, totalPages }) => {
  const [page, setPage] = useState();
  return (
    <Grid.Container gap={2}>
      <Grid xs={12}>
        <Pagination
          color="primary"
          initialPage={initialPage}
          total={totalPages}
          onChange={() => {
            setPage(page);
          }}
          css={{ margin: "auto" }}
        />
      </Grid>
    </Grid.Container>
  );
};

export default Paginate;
