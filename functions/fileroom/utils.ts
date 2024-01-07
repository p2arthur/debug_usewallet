import { FileroomError } from "@/functions/fileroom/client"

export interface UploadResponse {
	errors?: FileroomError
	file?: {
		original: {
			cid: string
			integrityHash: string
			mimetype: string
			size: number
		}
		previews: Array<{
			cid: string
			integrityHash: string
			mimetype: string
			size: number
			width: number
		}>
		totalSize: number
		userId: string
	}
	listenTo?: {
		wsUrl: string
		event: string
	}
}

export interface UploadPayload {
	fileType: string
	file: File | string
	fileID: string
	resize?: Array<string>
}
export const enum FileType {
	IMAGE = "image",
	ANIMATION = "animation",
	VIDEO = "video",
	ANY = "any",
	UNSUPPORTED = "unsupported",
	CID = "cid",
}

export interface ProgressCallback extends Function {
	(data: any): any
}

export const getUuid = (a: string = ""): string =>
	a
		? /* eslint-disable no-bitwise */
		  ((Number(a) ^ (Math.random() * 16)) >> (Number(a) / 4)).toString(16)
		: `${1e7}-${1e3}-${4e3}-${8e3}-${1e11}`.replace(/[018]/g, getUuid)
