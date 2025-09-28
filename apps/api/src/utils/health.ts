import { checkHealth as checkDbHealth } from "@vision_dashboard/db/utils/health";

export async function checkHealth(): Promise<void> {
  await checkDbHealth();
}
