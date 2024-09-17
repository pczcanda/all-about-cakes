import { BaseCake } from "../../types";

export interface NewCakeFormProps {
  onSubmit: (newCake: BaseCake) => void;
}
