import { FileText, X } from "lucide-react";
import { motion as Motion } from "framer-motion";
import { cn } from "../../utils/format";

export function FilePreview({ file, onRemove, compact = false }) {
  if (!file) return null;

  const isImage = file.type?.startsWith("image/");
  const previewUrl = isImage ? URL.createObjectURL(file) : null;

  return (
    <Motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={cn(
        "relative group rounded-xl border border-white/10 bg-white/5 overflow-hidden",
        compact ? "max-w-[200px]" : "max-w-xs"
      )}
    >
      {isImage && previewUrl ? (
        <img
          src={previewUrl}
          alt={file.name}
          className="w-full h-32 object-cover"
          onLoad={() => URL.revokeObjectURL(previewUrl)}
        />
      ) : (
        <div className="flex items-center gap-3 p-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
            <FileText className="h-5 w-5 text-primary" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium truncate">{file.name}</p>
            <p className="text-xs text-muted-foreground">
              {(file.size / 1024).toFixed(1)} KB
            </p>
          </div>
        </div>
      )}

      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          className="absolute top-2 right-2 p-1 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Remove attachment"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      )}
    </Motion.div>
  );
}
