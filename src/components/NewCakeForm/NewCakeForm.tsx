import { Box } from "@mui/material";
import { useState } from "react";
import { YumFactor } from "../../types";

const NewCakeForm: React.FC<{}> = () => {
  /* state */
  const [name, setName] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [yumFactor, setYumFactor] = useState<YumFactor>(1);

  /* values */
  const hasValues = !!name && !!comment && !!yumFactor;

  /* events */
  const handleChangeName = (event: React.FormEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };
  const handleChangeComment = (event: React.FormEvent<HTMLTextAreaElement>) => {
    setComment(event.currentTarget.value);
  };
  const handleChangeYumFactor = (event: React.FormEvent<HTMLSelectElement>) => {
    setYumFactor(parseInt(event.currentTarget.value) as YumFactor);
  };

  const handleSubmitNewCake = () => {};

  return (
    <Box className="new-cake-form" component="form">
      <Box mb={2}>
        <Box mb={1}>
          <label htmlFor="new-cake__name">Cake name</label>
        </Box>
        <input type="text" value={name} onChange={handleChangeName} required />
      </Box>

      <Box mb={2}>
        <Box mb={1}>
          <label htmlFor="new-cake__comment">Comment</label>
        </Box>
        <textarea value={comment} onChange={handleChangeComment} required />
      </Box>

      <Box mb={2}>
        <Box mb={1}>
          <label htmlFor="new-cake__comment">Yum factor</label>
          <select value={yumFactor} onChange={handleChangeYumFactor} required>
            <option id="yumfactor-1">1</option>
            <option id="yumfactor-2">2</option>
            <option id="yumfactor-3">3</option>
            <option id="yumfactor-4">4</option>
            <option id="yumfactor-5">5</option>
          </select>
        </Box>
      </Box>

      <button type="submit" onClick={handleSubmitNewCake} disabled={hasValues}>
        Submit new cake
      </button>
    </Box>
  );
};

export default NewCakeForm;
