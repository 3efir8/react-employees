import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootStore } from "./store";

export const userAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootStore>();