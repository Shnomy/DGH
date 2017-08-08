import { props, state } from "cerebral/tags";
import { when } from "cerebral/operators";

import uploadImage from "../actions/uploadImage";
import pushImageArticle from "../actions/pushImageArticle";
import pushImageSubCategory from "../actions/pushImageSubCategory";
import pushImagePage from "../actions/pushImagePage";

export default [
  when(props`file`),
  {
    true: [
      when(state`edit.article`),
      {
        true: [uploadImage, pushImageArticle],
        false: [
          when(state`edit.subCategory`),
          {
            true: [uploadImage, pushImageSubCategory],
            false: [uploadImage, pushImagePage]
          }
        ]
      }
    ],
    false: []
  }
];
