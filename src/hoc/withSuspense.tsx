import {ComponentType, Suspense} from "react"
import {Preloader} from "../components/Common/Preloader"


export function withSuspense<WPC>(WrappedComponent: ComponentType<WPC>) {
    return (props: WPC) => {
        return (
            <Suspense fallback={<Preloader />}>
                <WrappedComponent {...props} />
            </Suspense>
        )
    }
}