import { UserInfo } from "@/graphql/client"
import { env } from "@/functions/env"
import { Client ,ConfigOptions} from "@dartroom/fileroom-sdk"

const fileroom = {
	api: env.FILEROOM_API,
	cdn: env.FILEROOM_CDN,
	env:env.FILEROOM_ENV as ConfigOptions["env"],
	Client:Client,
	getAuthToken: () => {
		const userInfo = useCookie("userInfo")
		const info = userInfo.value as unknown as null | UserInfo

		if (!info?.user?.fileroom?.token) {
			console.error("User info does not include a Fileroom token")
			throw new Error("User info does not include a Fileroom token")
		}

		return info.user.fileroom.token
	},
}

type FileroomError = Array<{
	data?: {
		message: string
	}
	message: string
	source?: string
	status?: number
}>

export { fileroom, FileroomError }
