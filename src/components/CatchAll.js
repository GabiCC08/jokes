import React, { useEffect, useState } from "react";
import { BuilderComponent, builder, Builder } from "@builder.io/react";

export const CatchAll = () => {
  const [pageJson, setPage] = useState();
  const [loading, setLoading] = useState(false);
  const isEditingOrPreviewing = Builder.isEditing || Builder.isPreviewing;

  useEffect(() => {
    if (!isEditingOrPreviewing) {
      fetchPage();
    }
    async function fetchPage() {
      setLoading(true);
      // eslint-disable-next-line no-restricted-globals
      const content = await builder.get("page", { url: location.pathname });
      setPage(content);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (!pageJson && !isEditingOrPreviewing) {
    return <NotFound />;
  }
  return <BuilderComponent model="page" content={pageJson} />;
};

const NotFound = () => <h1>No page found for this URL, did you publish it?</h1>;
const Loading = () => <h1>Loading...</h1>;
