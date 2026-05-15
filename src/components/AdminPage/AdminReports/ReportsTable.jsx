import { useState } from "react";
import {
  FileText,
  Video,
  Image,
  Eye,
  X,
  CheckCircle,
  XCircle,
} from "lucide-react";
import styles from "./ReportsTable.module.css";

const TYPE_CONFIG = {
  Texto: {
    icon: <FileText size={13} />,
    className: "badgeTexto",
    label: "Texto",
  },
  Video: { icon: <Video size={13} />, className: "badgeVideo", label: "Video" },
  Imagen: {
    icon: <Image size={13} />,
    className: "badgeImagen",
    label: "Imagen",
  },
};

const defaultData = [
  {
    id: "r1",
    reportado: "maria_rdz",
    reporta: "ana_garcia",
    media: "Texto",
    mensaje: "Lenguaje ofensivo y acoso reiterado en mensajes privados.",
    mediaUrl: null,
    fecha: "25 feb",
  },
  {
    id: "r2",
    reportado: "jorge_m",
    reporta: "lucia_88",
    media: "Imagen",
    mensaje: "Spam repetitivo y enlaces sosp*****sos",
    mediaUrl:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600",
    fecha: "24 feb",
  },
  {
    id: "r3",
    reportado: "david_k",
    reporta: "pedro_lopez",
    media: "Texto",
    mensaje: "Publicó información falsa sobre otros usuarios.",
    mediaUrl: null,
    fecha: "23 feb",
  },
  {
    id: "r4",
    reportado: "ana_garcia",
    reporta: "david_k",
    media: "Imagen",
    mensaje: "Compartió imágenes inapropiadas sin consentimiento.",
    mediaUrl:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600",
    fecha: "22 feb",
  },
  {
    id: "r5",
    reportado: "elena_v",
    reporta: "maria_rdz",
    media: "Texto",
    mensaje: "Amenazas veladas en comentarios públicos.",
    mediaUrl: null,
    fecha: "21 feb",
  },
  {
    id: "r6",
    reportado: "pedro_lopez",
    reporta: "elena_v",
    media: "Video",
    mensaje: "Contenido de video con discurso de odio.",
    mediaUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    fecha: "20 feb",
  },
];

// ── Toast ──────────────────────────────────────────────────────────────────
function Toast({ message, onClose }) {
  return (
    <div className={styles.toast}>
      <div className={styles.toastContent}>
        <p className={styles.toastTitle}>Reporte aceptado — Advertencia</p>
        <p className={styles.toastBody}>{message}</p>
      </div>
      <button className={styles.toastClose} onClick={onClose}>
        <X size={14} />
      </button>
    </div>
  );
}

// ── Confirm Modal ──────────────────────────────────────────────────────────
function ConfirmModal({ report, onConfirm, onCancel }) {
  return (
    <div className={styles.overlay} onClick={onCancel}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div>
            <h2 className={styles.modalTitle}>Confirmar acción</h2>
            <p className={styles.modalMeta}>
              ¿Aceptar el reporte contra <strong>{report.reportado}</strong>?
            </p>
          </div>
          <button className={styles.closeBtn} onClick={onCancel}>
            <X size={16} />
          </button>
        </div>
        <p className={styles.confirmText}>
          Se emitirá una advertencia (strike) a{" "}
          <strong>{report.reportado}</strong>. Esta acción no se puede deshacer.
        </p>
        <div className={styles.modalActions}>
          <button className={styles.btnReject} onClick={onCancel}>
            <XCircle size={15} /> Cancelar
          </button>
          <button className={styles.btnAccept} onClick={onConfirm}>
            <CheckCircle size={15} /> Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Review Modal ───────────────────────────────────────────────────────────
function ReviewModal({ report, onAccept, onReject, onClose }) {
  const mediaType = report.media;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div>
            <h2 className={styles.modalTitle}>Revisar reporte {report.id}</h2>
            <p className={styles.modalMeta}>
              <strong>{report.reporta}</strong> reportó a{" "}
              <strong>{report.reportado}</strong>
              &nbsp;·&nbsp;{report.fecha}, 03:15
            </p>
          </div>
          <button className={styles.closeBtn} onClick={onClose}>
            <X size={16} />
          </button>
        </div>

        <p className={styles.sectionLabel}>Mensaje</p>
        <div className={styles.mensajeBox}>
          <em>"{report.mensaje}"</em>
        </div>

        {mediaType === "Imagen" && report.mediaUrl && (
          <>
            <p className={styles.sectionLabel}>Media adjunta (image)</p>
            <img
              src={report.mediaUrl}
              alt="media adjunta"
              className={styles.mediaImg}
            />
          </>
        )}

        {mediaType === "Video" && report.mediaUrl && (
          <>
            <p className={styles.sectionLabel}>Media adjunta (video)</p>
            <video controls className={styles.mediaImg}>
              <source src={report.mediaUrl} />
            </video>
          </>
        )}

        <div className={styles.modalActions}>
          <button className={styles.btnReject} onClick={onReject}>
            <XCircle size={15} /> Rechazar
          </button>
          <button className={styles.btnAccept} onClick={onAccept}>
            <CheckCircle size={15} /> Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main Table ─────────────────────────────────────────────────────────────
function ReportsTable({ data = defaultData }) {
  const [reviewing, setReviewing] = useState(null); // report being reviewed
  const [confirming, setConfirming] = useState(null); // report pending confirm
  const [toast, setToast] = useState(null); // toast message

  const handleRevisar = (row) => setReviewing(row);
  const handleCloseReview = () => setReviewing(null);

  const handleAccept = () => {
    setConfirming(reviewing);
    setReviewing(null);
  };

  const handleReject = () => setReviewing(null);

  const handleConfirm = () => {
    const user = confirming.reportado;
    setConfirming(null);
    setToast(`${user} tiene 1 strike(s).`);
    setTimeout(() => setToast(null), 4000);
  };

  const handleCancelConfirm = () => {
    setConfirming(null);
  };

  return (
    <>
      <div className={styles.container}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>ID</th>
              <th className={styles.th}>Reportado</th>
              <th className={styles.th}>Reporta</th>
              <th className={styles.th}>Media</th>
              <th className={styles.th}>Fecha</th>
              <th className={`${styles.th} ${styles.right}`}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => {
              const config = TYPE_CONFIG[row.media];
              return (
                <tr key={row.id} className={styles.row}>
                  <td className={`${styles.td} ${styles.idCell}`}>{row.id}</td>
                  <td className={`${styles.td} ${styles.bold}`}>
                    {row.reportado}
                  </td>
                  <td className={`${styles.td} ${styles.muted}`}>
                    {row.reporta}
                  </td>
                  <td className={styles.td}>
                    <span
                      className={`${styles.badge} ${styles[config.className]}`}
                    >
                      {config.icon}
                      {config.label}
                    </span>
                  </td>
                  <td className={`${styles.td} ${styles.muted}`}>
                    {row.fecha}
                  </td>
                  <td className={`${styles.td} ${styles.right}`}>
                    <button
                      className={styles.btnRevisar}
                      onClick={() => handleRevisar(row)}
                    >
                      <Eye size={14} /> Revisar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {reviewing && (
        <ReviewModal
          report={reviewing}
          onAccept={handleAccept}
          onReject={handleReject}
          onClose={handleCloseReview}
        />
      )}

      {confirming && (
        <ConfirmModal
          report={confirming}
          onConfirm={handleConfirm}
          onCancel={handleCancelConfirm}
        />
      )}

      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </>
  );
}

export default ReportsTable;
