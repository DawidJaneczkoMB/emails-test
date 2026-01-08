export const MemberRole = ["reader", "admin", "editor", "owner"] as const;
export type MemberRole = (typeof MemberRole)[number];

export const MemberRoleMap: Record<MemberRole, string> = {
  editor: "editor",
  reader: "reader",
  admin: "admin",
  owner: "owner",
};
