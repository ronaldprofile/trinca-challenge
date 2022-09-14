import * as zod from "zod";

export const createMemberSchemaForm = zod.object({
  name: zod.string().min(1, "Nome do membro é essencial"),
  contribution: zod
    .number({ invalid_type_error: "Contribuição do membro é essencial" })
    .min(15, "Contribuição igual ou acima de R$ 15"),
  drinkIncluded: zod.enum(["with", "without"]),
});

export type createMemberDataForm = zod.infer<typeof createMemberSchemaForm>;
export type FormDataInputs = createMemberDataForm;
