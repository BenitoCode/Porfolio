type Props = {
  label: string;
  id: string;
  title: React.ReactNode;
  lead?: string;
};

export default function SectionHead({ label, id, title, lead }: Props) {
  return (
    <div className="section-head rv">
      <p className="label">{label}</p>
      <h2 id={id}>{title}</h2>
      {lead ? <p className="lead">{lead}</p> : null}
    </div>
  );
}
