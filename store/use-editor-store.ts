import { create} from 'zustand';
import { type Editor } from '@tiptap/react';

interface EditorState {
    editor : Editor | null;
    setEditor: (editor:Editor|null ) => void;
    isAiSidebarOpen: boolean;
    setAiSidebarOpen: (open: boolean) => void;
    toggleAiSidebar: () => void;
}

 export const useEditorStore = create<EditorState>((set) =>({
    editor:null,
    setEditor: (editor) => set({editor}),
    isAiSidebarOpen: false,
    setAiSidebarOpen: (open) => set({ isAiSidebarOpen: open }),
    toggleAiSidebar: () => set((state) => ({ isAiSidebarOpen: !state.isAiSidebarOpen })),
}))