/*
@description: Checkbox & Image Component
*/

import { Checkbox } from "@fluentui/react";
import { Image } from "@fluentui/react/lib/Image";
import { Stack } from "@fluentui/react";
import { useEffect, useState } from "react";

export default ({ id, checked, setIChecked }: any) => {
  //event handler of checkbox
  const handleChange = (e: any) => {
    setIChecked(id - 1, e.target.checked);
  };

  return (
    <Stack horizontal={true} gap={10} verticalAlign="center">
      <Checkbox checked={checked} onChange={handleChange} />
      <Image src={`images/${id}.png`} width={50} height={50} />
    </Stack>
  );
};
