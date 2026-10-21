
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";
import config from "../config/config";

export default function RTE({
  name = "content",
  control,
  label,
  defaultValue = "",
  rules,
}) {
  return (
    <div className="w-full">
      {label && (
        <label className="mb-1.5 block text-sm font-medium text-slate-700">
          {label}
        </label>
      )}

      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={defaultValue}
        render={({ field: { onChange, value } }) => (
          <Editor
            apiKey={config.tinymceApiKey || undefined}
            initialValue={defaultValue || ""}
            init={{
              height: 420,
              menubar: false,
              branding: false,
              plugins: [
                "advlist", "autolink", "lists", "link",
                "charmap", "preview", "anchor", "searchreplace",
                "visualblocks", "code", "fullscreen",
                "insertdatetime", "media", "table", "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | bold italic underline | " +
                "alignleft aligncenter alignright | bullist numlist | " +
                "link | removeformat | code fullscreen",
              content_style:
                "body { font-family: Inter, Helvetica, Arial, sans-serif; " +
                "font-size: 16px; line-height: 1.7; padding: 12px }",
              promotion: false,
            }}
            onEditorChange={(content) => {
              onChange(content);
            }}
          />
        )}
      />
    </div>
  );
}
